function seatsInTheater(nCols, nRows, col, row) {
    let colz = nCols - (col-1)
    let rowz = nRows - row
    
    return colz * rowz
  }