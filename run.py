from flask import Flask,render_template,jsonify,request
import json

app = Flask(__name__)

data="wa"

@app.route('/main')
def main():
  return render_template('main.html')

@app.route('/main/serch',methods=['POST','GET'])
def serch():
  print("test");
  data = json.loads(request.data);
  print(type(data));
  fw = open('data.json','w')
  json.dump(data,fw,indent=4)
  print(data);

  result={
      "Result":{
          "test":"ok"
      }
  }

  return jsonify(ResultSet=result)

@app.route('/serchResult',methods=['POST','GET'])
def serchResult():
  f = open("data.json",'r')
  data=json.load(f)
  print("data_show")
  print(data);

  """
  if(data['soup']=='salt' and data['noodle']== 'thin noodles' and data['soup']=='weak soup'):
    ResultJson = open("salt_hosomen_thin.json",'r')
    ResultJson = json.load(ResultJson)
    print("ResultJson_show")
    print(ResultJson)
  #return render_template('mainResult.html',image=ResultJson["images"],name=ResultJson["name"])
  """
  return render_template('mainResult.html')
if __name__=='__main__':
  app.run(debug=True)
