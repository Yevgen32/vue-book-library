const book = (name, genre, author, description, year, phone, image) => ({name, genre, author, description, year, phone, image});
const log = (description, genre, data = new Date()) => ({description, genre, data});


const books = [
    book('Vue js','documents','henri','Vue js is very interesting library...','2018','+38 068 82 81 301','img/book1.png'),
    book('5 love languages','other','olol','Vue js is ..','2015','+38 062 13 12 312','img/book2.jpg'),
    book('React','learn','bla-bla','React js is very interesting library...','2012','+38 063 12 81 111','img/book3.jpg'),
];
new Vue({
    el:'#app',
    data:{
        books,
        book: books[0],
        bookIndexActive: 0,
        phoneVisibility: false,
        modalVisibility: false,
        search: '',
        logs: [],

    },
    methods:{
        selectBook(index){
            this.book = books[index];
            this.bookIndexActive = index;

        },
        newOrder(){
          this.modalVisibility = false;
          this.logs.push(
              log()
          )
        },
    },
    computed:{
        phoneBtnText(){
            return this.phoneVisibility ? 'show phone' : 'hide phone';
        },
        filterBooks(){
            let spam = this;
            const filter = this.books.filter(function(book) {
               return book.name.indexOf(spam.search) > -1;
            })
            return filter;
        }

    },
});