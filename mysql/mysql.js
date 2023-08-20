import mysql from 'mysql';
const connection = mysql.createConnection({
  host: '103.127.146.144', 
  user: 'root',
  password: 'atre_server',
  database: 'v2_atre_server',
});

connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the database:', error);
    return;
  }
  console.log('Connected to the database!');
});

export    {connection};
