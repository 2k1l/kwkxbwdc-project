<script>

    import { onMount } from "svelte";

    export let title;
    export let uniqueId;
    export let fronttext;
    export let backtext;
    export let callback;
    export let options;

    onMount (() => {
        let observer = new IntersectionObserver(callback, options);

        const observedElement = document.getElementById(uniqueId);
        if (observedElement) {
            observer.observe(observedElement)
        } else {
            alert('ID not found')
        }

    });
    
</script>

<div id={uniqueId} class="container">
    <div class="card">
        <div class="card-front">
            <h2>{title}</h2>
            <p>{fronttext}</p>
        </div>
        <div class="card-back">
            <h2>{title}</h2>
            <p>{backtext}</p>
        </div>
    </div>
</div>

<style>
    .container{
        margin: 50px;
        height: 400px;
        transition: .3s ease;
    }
    .card{
        width: 400px;
        height: 100%;
        perspective: none;
        margin: auto;
        position: relative;
    }
    .card-front, .card-back{
        position:absolute;
        width: 100%;
        height: auto;
        align-items: center;
        backface-visibility: hidden;
        transition: transform 0.9s ease;
        padding: 25px;
        padding-bottom: 50px;
        border-radius: 30px;
        font-size: 18px;
    }
    .card-front{
        background-color: white;
        color: black;
        box-shadow: 0px 2px 6px rgba(0,0,0,0.2);
    }
    .card-back{
        transform: rotateY(180deg);
        color: white;
        box-shadow: 0px 2px 6px rgba(0,0,0,0.2);
    }
    .card:hover .card-front{
        transform: rotateY(-180deg);
    }
    .card:hover .card-back{
        transform: rotateY(0deg);
    }
    .card:hover{
        cursor: crosshair;
    }

</style>