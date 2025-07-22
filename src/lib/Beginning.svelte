<script>
  import photoOfBrooklyn from "../assets/Photo Of Brooklyn.jpg"
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
                It houses over 2,736,074 people, with a black population of <a href="https://blackwealthdata.org/explore/population">767,120 which is 29%</a> of the entire Brooklynite population. The black population has decreased by <a href="https://brooklyn.org/brooklyn-facts/">since 2010</a>.
            </p>
            <p>
                This highlights the larger issue of gentrification, black people are being priced out of their homes.
            </p>
        </div>
    </div>
</section>

<style>
    h1{
        padding-top: 30px;
        margin-bottom: 100px;
    }
    .container {
        width: 100%;
        height: 500vh;
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
    .left{
        width: 500px;
        order: 0;
        display: block;
        margin-top: 100px;
    }

    .right{
        order: 1;
        position: sticky;
        height: 500px;
        top: 20px;
        transition: .1s ease;
    }

    .left p{
        width: 500px;
        font-size: 20px;
        margin-bottom: 100px;
        align-items: center;
    }

    .sticky-right{
        position: sticky;
        top: 50vh;
    }
    .sticky-right{
        flex: 0 0 300px;
        width: 100%;
    }
    .sticky-right p {
        text-align: center;
    }
</style>