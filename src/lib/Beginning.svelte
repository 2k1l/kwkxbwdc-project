<script>
  import photoOfBrooklyn from "../assets/Photo Of Brooklyn.jpg"
  import graphOfAvgHomeValue from "../assets/Graph of Average Home Value.png"
  import leastAvgHomeValue from "../assets/Least Graph of Average Home Value.png"
  import graphofBlackPop from "../assets/Graph of Black Population and Ownership.png"
  import leastBlackPop from "../assets/Least Graph of Black Population and Ownership.png"
  import popBlackGraph from "../assets/Population of Black People in Brooklyn over the Years.png"
  import tableBlackPop from "../assets/Table Black Population Over Years.png"

</script>


<section class="home">
    <h1>How has the Black Population in Brooklyn Changed?</h1>
    <div class="container">
        <div class="right">
            <div class="sticky-right">
                <img src={photoOfBrooklyn} alt="Photo of Brooklyn from Dumbo facing the Brooklyn Bridge.">
                <p><a href="https://www.istockphoto.com/photos/brooklyn-new-york">Stock Photo Source</a></p>
            </div>
        </div>
        <div class="left">
            <p>
                Brooklyn is a cultural hub of music, art, and creativity itself. Community members share the common identity of “Brooklynites”.
            </p>
            <p>
                Here you can find pioneers of their respective fields! Musicians such as <a href="https://en.wikipedia.org/wiki/Brooklyn#Culture">Jay Z., Notorious B.I.G., Beastie Boys, etc.</a> Iconic landmarks such as <a href="https://en.wikipedia.org/wiki/Brooklyn#Culture">the Brooklyn Bridge, Coney Island, Brooklyn Botanical Garden, etc.</a>
            </p>
            <p>
                It houses over 2,736,074 people, with a black population of <a href="https://blackwealthdata.org/explore/population">767,120 which is 29%</a> of the entire Brooklynite population.
            </p>
            <p>
                This highlights the larger issue of gentrification, black people are being priced out of their homes.
            </p>
        </div>
    </div>

    <div class="data-container-black-pop">
        <div class="left">
            <div class="sticky-left">
                <img src={popBlackGraph} alt="Graph of black population over the years">
            </div>
        </div>
        <div class="right">
             <h2>Has Gentrification Been Happening?</h2>
            <p> Despite being such leaders of culture black people have been moving out of Brooklyn.  
            </p>
            <p>We will explore the reasons behind this migration based on the data.
            </p>
            <p>
            We hypothesize the following as answers:
            </p>
            <ul>
                <li>Increased cost of living</li>
                <li>Unobtainable home prices</li>
                <li>Friends and family leaving the area</li>
            </ul>
            <img src={tableBlackPop}>
            <p>We see where the decreasing began in the 1950s, which eventually reaches lows of 2,230,936. But suddenly increased again in the following years. So, what's happening?</p>
        </div>
    </div>
    <h1>
        History
    </h1>
</section>

<style>
    h1{
        padding-top: 30px;
        margin-bottom: 100px;
    }
    .container {
        width: 100%;
        height: 150vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        column-gap: 50px;
        color: white;
    }

    .right, .left{
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        flex:1 1;
        
    }
    .container .left{
        width: 500px;
        order: 0;
        display: block;
        margin-top: 100px;
    }

    .container .right{
        order: 1;
        position: sticky;
        height: 500px;
        top: 20px;
        transition: .1s ease;
        margin-top: 100px;
    }

    .container .left p{
        width: 500px;
        font-size: 20px;
        margin-bottom: 100px;
        align-items: center;
    }

    .container .sticky-right{
        position: sticky;
        top: 50vh;
    }
    .container .sticky-right{
        flex: 0 0 300px;
        width: 100%;
    }
    .container .sticky-right p {
        text-align: center;
    }
    .data-container-black-pop{
        width: 100%;
        height: 200vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        column-gap: 50px;
        color: white;
    }
    .data-container-black-pop .left{
        order: 0;
        position: sticky;
        top: 75px;
        transition: .1s ease;
    }
    .data-container-black-pop .left img{
        width: 100%;
    }
    .data-container-black-pop .right{
        width: 500px;
        order: 1;
        display: block;
        margin-top: 100px;
        font-size: 20px;
        text-align: left;
    }
    .data-container-black-pop .right img{
        height: 600px;
    }
</style>