export const equalRowsData = (matrix) => {
  const equalRows = []
  matrix.map((row, ir) => {
    let counterEquals = 0
    row.map(v => {
      if(v===row[0] && v!==null) counterEquals++
    })
    if (counterEquals===matrix[0].length) equalRows.push(ir)
  })
  return equalRows
}

export const equalColumnsData = (matrix) => {
  // Transpose rows to re-use equalRowsData function
  let m = []
  matrix.map(row => {
    m.push(row.map(v => null))
  })

  matrix.map((row, f) => {
    row.map((v, c) => {
      m[f][c] = matrix[c][f]
    })
  })
  return equalRowsData(m)
}

export const equalDiagonalsData = (matrix) => {
  let diagonals = [
    [matrix[0][0], matrix[1][1], matrix[2][2]],
    [matrix[0][2], matrix[1][1], matrix[2][0]]
  ]
  return equalRowsData(diagonals)
}
