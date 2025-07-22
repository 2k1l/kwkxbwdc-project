<script>
  import HistoryBlock1 from "./HistoryBlock1.svelte";

    const options = {
        threshold: [0.7,0.85]
    };

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            const element = entry.target;

            if (entry.intersectionRatio > .75) {
                element.style.opacity = 1
            } else {
                element.style.opacity = 0
            }
        });
    };


</script>

<div class="container">
    <div class="left">
        <div class="colonial">
            <HistoryBlock1 uniqueId="colonial"
             title="During Colonization"
             fronttext="America has a deep rooted history in displacement of native people. Brooklyn (King &#39; s county) is no exception; the native tribe of Lenape people were forced to migrate West by the Dutch, the first European settlers of Long Island. The name &#34;Brooklyn&#34; originates from the Dutch settlement of &#34Breukelen&#34."
             backtext="Black people where forced over due to slavery leading to the original black population. Althrough treated better than a normal slave; they still suffered through difficulties."
             {callback}
             {options}
             />
        </div>
        <div class="left-img"></div>
       <div class="nineteethCentury">
            <HistoryBlock1 uniqueId="nineteethCentury"
                title="Nineteenth Century"
                fronttext="FRONTTEXT"
                backtext="BACKTEXT"
                {callback}
                {options}
                />
        </div>
    </div>
    <div class="right">
        <div class="hoverover">
            <HistoryBlock1 uniqueId="hoverover"
             title="Hover Over"
             fronttext="to reveal text!"
             backtext="Here's the hidden text!"
             {callback}
             {options}
             />
        </div>
        <div class="postcivilwar">
            <HistoryBlock1 uniqueId="postcivilwar"
                title="Post Civil War"
                fronttext="FRONTTEXT"
                backtext="BACKTEXT"
                {callback}
                {options}
             />
        </div>
    
    </div>
</div>

<style>
    /* Opacity Transition */
    .card-active{
        opacity: 1;
    }

    * {
        margin: 0;
        padding: 0;
    }

    .container {
        padding-top: 25px;
        width: 100%;
        height: 500vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        column-gap: 50px;
        color: white;
    }

    .left, .right{
        display: flex;
        align-items: center;
        position: static;
        margin: 0;
        padding: 0;
        flex-direction: column;
        
    }
    .left{
        margin-top: 50vh;
        order: 0;
    }
    .right{
        margin-bottom: 25vh;
        order: 1;
    }

</style>