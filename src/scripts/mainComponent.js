import '../styles/style.scss';
import PostsData from '../assets/json/DataPosts.json';

export class MainComponent {

    constructor() {

        this._selector = '#App';
        this._element = document.querySelector(this._selector);

        this.setInfo = this.setInfo.bind(this);

        console.log(PostsData[0].id);
    }

    setInfo (msg)  {
        this._element.innerHTML = this._getTemplate(msg);
    }

    _getTemplate (msg)  {
        return `<h2 class='title'>${msg}</h2>`
    }

    get element () {

        if(this._element == null){
            throw 'main component not found';
        }

        return this._element;
    }
}