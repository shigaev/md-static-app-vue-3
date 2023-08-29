# Роутинг

#### Функция для динамической загрузки компонента

```js
dynamicComponent();
{
    let content = '';
    for (let i = 0; i < this.list.themes.length; i++) {
        if (this.$route.path === this.list.themes[i].urlPath) {
            content = this.list.themes[i].name;
            document.title = this.list.themes[i].title;
        }
    }
    return content;
}
```