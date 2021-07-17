<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Badminton Score Board</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
</head>

<body>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-one-third is-offset-one-third">
                    <div class="card">
                        <div class="card-image">
                            <figure class="image is2by1">
                                <img src="https://images.unsplash.com/photo-1521537634581-0dced2fee2ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                                    class="card-img-top" alt="...">
                            </figure>
                        </div>
                        <header class="card-header">
                            <p class="card-header-title">
                                Badminton Score Keeper
                            </p>
                        </header>
                        <div class="card-content">
                            <div class="content">
                                <h1 class="title is-1"><span id="player1">0</span> to <span id="player2">0</span>
                                </h1>
                                <p class="subtitle">Tap the button to view the score</p>
                                <div>
                                    <label class="label is-large is-inline" for="winPoint">Play to</label>
                                    <div class="select is-rounded">
                                        <select name="winPoint" id="maxScore">
                                            <option value="7">7</option>
                                            <option value="11">11</option>
                                            <option value="21">21</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <footer class="card-footer">
                            <button id="plusPlayer1" class="button is-large card-footer-item is-primary">Player 1
                                +</button>
                            <button id="plusPlayer2" class="button is-large card-footer-item is-info">Player 1
                                +</button>
                            <button id="reset" class="button is-large card-footer-item is-danger">Reset</button>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <script src="app.js"></script>
</body>

</html>