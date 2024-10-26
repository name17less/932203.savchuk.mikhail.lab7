
var choosenFigure = null;
var choosenFigureColor = null;

function createFigure(className)
{
    let numberOfShapes = document.getElementById('numberOfShapes').value;

    for (let i = 0; i < numberOfShapes; i++) {

    let figure = document.createElement('div');
    figure.className = className;

    let size =  Math.random() * 100 + 'px';
    if(className == 'triangle')
    {
        figure.style.borderLeftWidth = size;
        figure.style.borderRightWidth = size;
        figure.style.borderBottomWidth = size;
    }
    else
    {
        figure.style.width = size;
        figure.style.height = size;
    }
    figure.style.left = Math.random() * window.innerWidth + 'px';
    figure.style.top = Math.random() * window.innerHeight + 'px';

    figure.addEventListener('dblclick', function() {
        this.remove();
    });

    figure.addEventListener('click', function() {
        if(choosenFigure != null)
        {
            if(!choosenFigure.classList.contains('triangle')) choosenFigure.style.backgroundColor = choosenFigureColor;
            choosenFigure.style.borderBottomColor = choosenFigureColor;
        }
        choosenFigureColor = this.style.backgroundColor;
        choosenFigure = this;

        this.style.borderBottomColor  = 'rgba(255,255,0,0.9)';
        if(!choosenFigure.classList.contains('triangle')) this.style.backgroundColor  = 'rgba(255,255,0,0.9)';
    });

    document.body.appendChild(figure);
    }
}