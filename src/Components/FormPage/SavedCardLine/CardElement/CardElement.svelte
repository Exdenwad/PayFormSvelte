<script>
    export let cardItem;
</script>

<div class="card-bind " on:click>
    <div class="card-bind__wrap sber">
        <div class="card-bind__img">
            <img class="card-bind__logo" src="img/pay/sbermobilelogo.png" alt="">
            <img class="card-bind__name" src="img/pay/visa.png" alt="">
        </div>
        <div class="card-bind__text">
            <p>**** {cardItem.number.slice(cardItem.number.length - 4)}</p>
            <p>{cardItem.validityPeriod.month} / {cardItem.validityPeriod.year.slice(-2)}</p>
        </div>
    </div>
</div>