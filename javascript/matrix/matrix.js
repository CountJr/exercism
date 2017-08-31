class Matrix {
  constructor(str) {
    this.rows = str.split('\n').map(row => row.split(' ').map(el => +el));
    this.columns = this.rows[0].map((col, i) => this.rows.map(row => row[i]))
  }
}

module.exports = Matrix;