const btnScrollKeAtas = document.querySelector
{
    "#btnScrollKeAtas"
};

btnScrollKeAtas.addEventListener (
    "click", function () {
        windows.scrollTo(0,0);
    }
);

$(
    "html, body"
).animate(
    {
        ScrollAtas: 0
    }, "slow"
);