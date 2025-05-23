import { defineStore } from 'pinia'
import littlePrince from './books/littlePrince.json'

export const useBookListStore = defineStore('count', {
  state (){
    return {
      bookList: [
        {
          id: 1,
          title: "Little Prince",
          cn: "小王子",
          chapterNum: 27,
          content: littlePrince
        }
      ]
    }
  },
  getters: {
    getBookById: (state) => {
      return (id: number) => state.bookList.find(book => book.id === id);
    }
  }
})