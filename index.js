const canvas = document.querySelector( 'canvas' ),
    ctx = canvas.getContext( '2d' ),
    width = ( canvas.width = window.innerWidth ),
    height = ( canvas.height = window.innerHeight )

const str = ' РОДИП ЫТ родип ыт',
    matrix = str.split( '' )

let fontSize = 12,
    colsCount = width / fontSize,
    colsStartPositions = []

for ( let col = 0; col < colsCount; col++ ) {
    if ( Math.random() > 0.975 ) {
        colsStartPositions[ col ] = 1 // Starts from beginning
    } else {
        // Starts later
        colsStartPositions[ col ] = 0 - Math.floor( Math.random() * colsCount ) // from -colsCount to 0
    }
}

const draw = () => {
    ctx.fillStyle = 'rgba( 0, 0, 0, 0.05 )'
    ctx.fillRect( 0, 0, width, height )
    ctx.fillStyle = '#0f0'
    ctx.font = fontSize + 'px system-ui'
    for ( let col = 0; col < colsStartPositions.length; col++ ) {
        let matrixItem = matrix[ Math.floor( Math.random() * matrix.length ) ]
        ctx.fillText( matrixItem, col * fontSize, colsStartPositions[ col ] * fontSize )
        if ( colsStartPositions[ col ] * fontSize > height && Math.random() > 0.975 ) colsStartPositions[ col ] = 0
        colsStartPositions[ col ]++
    }
}

setInterval( draw, 100 )

window.addEventListener( 'resize', () => location.reload() )
