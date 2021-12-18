import time
# from flask import Flask

from flask_pymongo import PyMongo

from flask_mongoengine import MongoEngine

from flask import app

from flask import Flask

import flask

from flask import Blueprint,render_template, jsonify, request, url_for, redirect, session
from flask_session import Session
# from flask_pymongo import PyMongo

app =  flask.Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/lexiconDB"
mongo = PyMongo(app)
db= mongo.db

# app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}
    


    


def put_person_details(person_info):
    username=person_info["username"]
    password=person_info["password"]
    aadhar=person_info["aadhar"]
    category=person_info["category"]
    state=person_info["state"]
    district=person_info["district"]
    # print(person_info)
    db.login_details.insert_one({"username":username,"password":password,"aadhar":aadhar,"category":category,"state":state,"district":district})
    return {"message":"success","status":200}


@app.route('/api/signup' ,methods=['POST'])
def signup():
    person_info = request.get_json(force=True)
    # print(person_info)
    if person_info:
        data = put_person_details(person_info)
        return data
    return {"message":"Please try again after some time.","status":400}


def get_person_details(person_info):
    username=person_info["username"]
    password=person_info["password"]
    category=person_info["category"]
    data=list(db.login_details.find_one(
   { "username": username,"password":password,"category":category},
   { "_id": 0 ,"username":1,"state":1,"district":1,"aadhar":1}
    ))
    print(data)
    if data == []:
        return {"message":"failure","name":data,"status":400}
    else:
        return {"message":"success","name":data,"status":200}
    # return {"message":"success","status":200}

    
@app.route('/api/login' ,methods=['POST'])
def login_auth():
    person_info = request.get_json(force=True)
    # print(person_info)
    if person_info:
        return get_person_details(person_info)
    # return {"message":"Please try again after some time.","status":400}


def put_blog_data(blog_data):
    username=blog_data["username"]
    state=blog_data["state"]
    district=blog_data["district"]
    info=blog_data["blog"]
    db.blogs.insert_one({"username":username,"state":state,"district":district,"blog":info})
    return {"message":"success","status":200}
@app.route('/api/post_blog' ,methods=['POST'])
def post_blog():
    blog_data = request.get_json(force=True)
    if blog_data:
        data = put_blog_data(blog_data)
        return data
    return {"message":"Please try again after some time.","status":400}


def get_blog_data_local(get_data):
    state=get_data["state"]
    district=get_data["district"]
    data=db.blogs.find({"state":state,"district":district})
    return data   

@app.route('/api/view_blog_local' ,methods=['POST'])
def view_blog_local():
    get_data = request.get_json(force=True)
    if get_data:
        data = get_blog_data_local(get_data)
        return data
    return {"message":"Please try again after some time.","status":400}

@app.route('/api/states' ,methods=['GET'])
def send_states():
    data=list(db.state_list.find({},{"_id":0,"states":1}))[0]
    return data

@app.route('/api/districts' ,methods=['POST'])
def send_districts():
    data=request.get_json(force=True)
    state=data["state"]
    district=list(db.district_list.find({},{"_id":0,state:1}))[0][state]
    # print(district)
    return {"district":district}
    



def change_password_fun(get_data):
    
    data=db.login_details.find_one({ "username": username,"password":password,"category":category})
    return data   

@app.route('/api/change_password' ,methods=['POST'])
def change_password():
    get_data = request.get_json(force=True)
    if get_data:
        data = change_password_fun(get_data)
        return data
    return {"message":"Please try again after some time.","status":400}

