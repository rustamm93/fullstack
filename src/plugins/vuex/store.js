import { createStore } from "vuex";
import user from "@/plugins/vuex/user";
import bookAdd from "@/plugins/vuex/bookAdd";
import book from "@/plugins/vuex/book";
import category from "@/plugins/vuex/category";

export default createStore({
    modules: {
        bookAdd,
        user,
        book,
        category
    }
})