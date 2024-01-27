var NoteBook = /** @class */ (function () {
    function NoteBook(name) {
        this.name = name;
        this._initMain();
    }
    NoteBook.prototype._getTodosLS = function () {
        this._todos = JSON.parse(localStorage.getItem(this.name)) || [];
    };
    NoteBook.prototype._setTodosToLS = function () {
        localStorage.setItem(this.name, JSON.stringify(this._todos));
        this._initTodos();
    };
    NoteBook.prototype._initMain = function () {
        this._initTodos();
        this._initForm();
    };
    NoteBook.prototype._initTodos = function () {
        this._getTodosLS();
        var todosDiv = document.querySelector("#todos");
        todosDiv.innerHTML = "";
        this._todos.forEach(function (todo) {
            var todoDiv = document.createElement("div");
            todoDiv.innerText = "".concat(todo.id, " -  ").concat(todo.title);
            todosDiv.appendChild(todoDiv);
        });
    };
    NoteBook.prototype._initForm = function () {
        var _this = this;
        var form = document.forms["form"];
        form.onsubmit = function (e) {
            var _a;
            e.preventDefault();
            var input = e.target["title"];
            var id = ((_a = _this._todos.slice(-1)[0]) === null || _a === void 0 ? void 0 : _a.id) + 1 || 1;
            _this._todos.push({ id: id, title: input.value });
            _this._setTodosToLS();
            form.reset();
        };
    };
    return NoteBook;
}());
new NoteBook("noteBook2");
// localStorage.clear() //**delete localStorage
