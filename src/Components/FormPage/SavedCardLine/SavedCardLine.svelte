<script>
import CardElement from "./CardElement/CardElement.svelte";
    export let cardsArray;
    export let actionFrom;
</script>

<section class="cards">
    {#each cardsArray as cardItem, id (id)}
        <CardElement cardItem={cardItem} on:click={() => {actionFrom = id}} />
    {/each}
    <div class="card-add active" on:click={() => {actionFrom = "newcard"}}>
        <div class="card-add__wrap">
            <img src="img/pay/1.png" alt="">
            <p>Новая карта</p>
        </div>
    </div> 
</section>