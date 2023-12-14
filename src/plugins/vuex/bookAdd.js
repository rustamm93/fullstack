import axios from "axios";

export default {
    actions: {
        addBook() {
            return new Promise((resolve, reject) => {
                axios
                    .post('http://localhost:8888/api/books', {
                        'name': 'kitob f',
                        'description': 'izoh',
                        'category': "/api/categories/2"
                    })
                    .then(() => {
                        console.log('addBook then ishladi')
                        resolve()
                    })
                    .catch(() => {
                        console.log('addBook catch ishladi')
                        reject()
                    })
                    .finally(() => {
                        console.log('addBook final ishladi')
                    })
            })
        }
    },
}