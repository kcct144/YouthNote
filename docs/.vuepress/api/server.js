const express = require('express');
const { Credential } = require('@alicloud/credentials');
const OSS = require('ali-oss');

const app = express();

const credentialsConfig = new Credential({
  type: 'ecs_ram_role',
  roleName: 'YouthNote', // 角色名
  disableIMDSv1: true,
});

const ossClient = new OSS({
  region: 'oss-cn-guangzhou-internal.aliyuncs.com', // 内网地址
  accessKeyId: credentialsConfig.accessKeyId,
  accessKeySecret: credentialsConfig.accessKeySecret,
  stsToken: credentialsConfig.securityToken,
  bucket: 'kcct144' // 存储空间名称
});

app.get('/*', async (req, res) => {
  const objectKey = req.params[0]; 
  try {
    const result = await ossClient.getStream(objectKey);
    res.header('Content-Type', 'video/mp4');
    result.stream.pipe(res);
  } catch (err) {
    res.status(500).send('File not found');
  }
});

app.listen(3100, () => {
  console.log('Server running on port 3100');
});