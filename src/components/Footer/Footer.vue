<template>
    <footer>
        <div class="links">
            <ul>
                <h5>Компания</h5>
                <li>
                    <router-link to="/">О нас</router-link>
                </li>
                <li>
                    <router-link to="/">Вакансии</router-link>
                </li>
                <li>
                    <router-link to="/">For the Record</router-link>
                </li>
            </ul>
            <ul>
                <h5>Сообщества</h5>
                <li>
                    <router-link to="/">Для исполнителей</router-link>
                </li>
                <li>
                    <router-link to="/">Для разработчиков</router-link>
                </li>
                <li>
                    <router-link to="/">Реклама</router-link>
                </li>
                <li>
                    <router-link to="/">Для инвесторов</router-link>
                </li>
                <li>
                    <router-link to="/">Для вендоров</router-link>
                </li>
            </ul>
            <ul>
                <h5>Полезные ссылки</h5>
                <li>
                    <router-link to="/">Справка</router-link>
                </li>
                <li>
                    <router-link to="/">Бесплатное мобильное приложение</router-link>
                </li>
            </ul>
        </div>
        <div class="icons">
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
            <i class="fab fa-facebook"></i>
        </div>
    </footer>
    <div>
        <a target="_blank" href="https://icons8.com/icon/RQA6292xREOo/home-page">Home Page</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    footer{
        color: #fff;
        display: flex;
        justify-content: space-between;
    }
    footer h5{
        font-weight: 700;
        margin-bottom: 2em;
    }
    .links{
        display: flex;
    }
    .links ul{
        margin-right: 2.6em;
    }
    .links ul li{
        margin-bottom: .6em;
        max-width: 200px;
    }
    footer nuxt-link{
        text-decoration: underline;
        color: rgba(128, 128, 128, .6);
    }
    footer nuxt-link:hover{
        text-decoration: none;
        color: #fff;
    }

    footer i{
        background-color: rgba(128, 128, 128, .6);
        border-radius: 50%;
        padding: .8em;
        margin-left: 1em;
    }
    footer i:hover{
        background-color: #999;
    }
</style>