# SqlSiri
A web based SQL learning platform that utilizes voice recognition to run SQL statements

##Project description:

*Problem:* Data querying and databases are becoming more widely used in a variety of different fields. However, not everyone is able to access databases via typing code due to mobility issues.

*Solution:* We tried to make querying for summary statistics and filter data as painless and efficient as possible, by incorporating speech-to-text to translate simple English phrases into SQL database queries.

*About:* This is a web application where users can upload an Excel file and speak a simple English phrase to query the data. It is accessible to people who cannot type easily and rely on speech-to-text functions daily and people who are inexperienced with database querying. Users can get summary statistics such as the sum, count, average, maximum and minimum of certain columns as well as filter the data based on a certain characteristic. The results can be seen on the screen afterwards along with the origin query.

For our main feature, we used the React Speech Recognition web hook to quickly transcribe audio from the users and send that information to our back-end. Various python libraries were used to parse the resulting text file through a Python Shell script, and the corresponding SQL query returns within seconds. The web application user interface was built using React, HTML and CSS and focused on displaying analyses in a clear and concise manner.

Video demo: https://www.youtube.com/watch?v=D3sE1JgMVlY 
