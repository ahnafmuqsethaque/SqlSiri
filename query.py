import sqlite3, pandas as pd, openpyxl
import sys
data = sys.argv[1]
# print(data)

conn = sqlite3.connect(':memory:')
cur = conn.cursor()

commands = ['number', 'all']
command_list = ['lowest','highest', 'sum', 'mean', 'all']
condition_start = 'with'
quantifiers = ['is', 'greater', 'less', 'fewer']


cmd=''
column= ''
quantifier=''
condition=''
value= ''
col_names = []
index_reached = 0
query = "SELECT * FROM Table1"








  
def parse(command):
    global column, quantifier, value, index_reached, cmd
    speech = command.lower()
    speech = speech.split(" ")

    for index, word in enumerate(speech):
      if word in commands:
        cmd = word
        index_reached = index
        conditionalStatement(speech)
      elif word in command_list:
        cmd = word
        index_reached = index
        numericalStatement(speech)

def numericalStatement(speech):
    global cmd, column, col_names
    for i in range(index_reached+1, len(speech)):
      if speech[i] in col_names:
        column = speech[i]


      

def conditionalStatement(speech):
    global column, quantifier, value, index_reached, cmd, condition_start
    for i in range(index_reached, len(speech)):
      if (speech[i] == condition_start):
        index_reached = i
          
    for i in range(index_reached, len(speech)):
      if speech[i] in col_names:
        column = speech[i]
        index_reached = i

    for i in range(index_reached, len(speech)):
      if speech[i] in quantifiers:
        quantifier = speech[i]
        index_reached = i
    
    for i in range(index_reached+1, len(speech)):
      if speech[i] != 'than':
        value = speech[i]




def filter():
    global column, quantifier, value, condition
    quant = ''
    if quantifier == "is":
      quant = "="
    elif quantifier == "greater":
      quant = ">"
    else:
      quant = "<"
    text = ['WHERE', column, quant, value]
    condition = ' '.join(text)



def aggregate():
    global cmd, query, column
    if cmd == "all":
      query = query + " " + condition

    elif cmd == "number":
      query = "SELECT COUNT(*) FROM Table1"
      query = query + " " + condition
    
    elif cmd == "sum":
      query = "SELECT SUM(" + column + ") FROM Table1"

    elif cmd == "mean":
      query = "SELECT AVG(" + column + ") FROM Table1"

    elif cmd == "lowest":
      query = "SELECT MIN(" + column + ") FROM Table1"
    
    elif cmd == "highest":
      query = "SELECT MAX(" + column + ") FROM Table1"


def main():

  global col_names
  df = pd.read_excel('./client/public/uploads/SAMPLE_EXCEL.xlsx')
  col_names = list(df.columns)
  col_names = list(map(str.lower, col_names))

  df2 = df.set_axis(col_names, axis=1, inplace=False)
  df2 = df2.applymap(lambda s: s.lower() if type(s) == str else s)
  df2.to_sql(name='Table1', con=conn)
  # print("before parse")
  parse(data)
  # print("before filter")
  filter()
  # print("before aggregate")
  aggregate()
  result = list()
  for row in cur.execute(query):
    result.append(row)
  print(result)
  return result;
 
main()