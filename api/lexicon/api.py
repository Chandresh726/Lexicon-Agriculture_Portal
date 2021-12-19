import time
# from flask import Flask
import os.path

from flask_pymongo import PyMongo

from flask_mongoengine import MongoEngine

from flask import app

from flask import Flask

import flask


from flask import Blueprint, render_template, jsonify, request, url_for, redirect, session
from flask_session import Session
import matplotlib.pyplot as plt
# from flask_pymongo import PyMongo

app = flask.Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/lexiconDB"
mongo = PyMongo(app)
db = mongo.db

# app = Flask(__name__)


@app.route('/time')
def get_current_time():
    return {'time': time.time()}


############################################### signup logic ###############################################

def put_person_details(person_info):
    username = person_info["username"]
    password = person_info["password"]
    aadhar = person_info["aadhar"]
    category = person_info["category"]
    state = person_info["state"]
    district = person_info["district"]
    # print(person_info)
    db.login_details.insert_one({"username": username, "password": password,
                                "aadhar": aadhar, "category": category, "state": state, "district": district})
    return {"message": "success", "status": 200}


@app.route('/api/signup', methods=['POST'])
def signup():
    person_info = request.get_json(force=True)
    # print(person_info)
    if person_info:
        data = put_person_details(person_info)
        return data
    return {"message": "Please try again after some time.", "status": 400}


############################################## login logic ###########################################

def get_person_details(person_info):
    username = person_info["username"]
    password = person_info["password"]
    category = person_info["category"]
    print(username, password, category)
    data = db.login_details.find_one(
        {"username": username, "password": password, "category": category},
        {"_id": 0, "username": 1, "state": 1, "district": 1,
            "aadhar": 1, "category": 1, "aadhar": 1}
    )
    if data == None:
        return {"message": "failure", "username": '', "state": '', "district": '', "category": '', "status": 400}
    else:
        return {"message": "success", "username": data["username"], "state": data["state"], "district": data["district"], "category": data["category"], "aadhar": data["aadhar"], "status": 200}
    # return {"message":"success","status":200}


@app.route('/api/login', methods=['POST'])
def login_auth():
    person_info = request.get_json(force=True)
    # print(person_info)
    if person_info:
        return get_person_details(person_info)
    # return {"message":"Please try again after some time.","status":400}

#################################################### my blogs ##########################


def my_blog_data(blog_data):
    username = blog_data["username"]
    state = blog_data["state"]
    district = blog_data["district"]
    temp = list(db.blogs.find(
        {"username": username, "state": state, "district": district}, {"_id": 0}))
    data = {0: len(temp)}
    for i in range(len(temp)):
        data[i+1] = temp[i]
    print(data)
    return data


@app.route('/api/my_blog', methods=['POST'])
def my_blog():
    blog_data = request.get_json(force=True)
    if blog_data:
        data = my_blog_data(blog_data)
        return data
    return {"message": "Please try again after some time.", "status": 400}


##################################################### post blog information  #######################
def put_blog_data(blog_data):
    username = blog_data["username"]
    state = blog_data["state"]
    district = blog_data["district"]
    info = blog_data["blog"]
    db.blogs.insert_one({"username": username, "state": state,
                        "district": district, "blog": info})
    return {"message": "successfully added blog", "status": 200}


@app.route('/api/post_blog', methods=['POST'])
def post_blog():
    blog_data = request.get_json(force=True)
    if blog_data:
        data = put_blog_data(blog_data)
        return data
    return {"message": "Please try again after some time.", "status": 400}


########################################## view blog of current state and district ####################
def get_blog_data_local(get_data):
    state = get_data["state"]
    district = get_data["district"]
    temp = list(db.blogs.find(
        {"state": state, "district": district}, {"_id": 0}))
    data = {0: len(temp)}
    for i in range(len(temp)):
        data[i+1] = temp[i]
    return data


@app.route('/api/view_blog_local', methods=['POST'])
def view_blog_local():
    get_data = request.get_json(force=True)
    if get_data:
        data = get_blog_data_local(get_data)
        return data
    return {"message": "Please try again after some time.", "status": 400}

######################################### Grievance delete #########################################


def grievance_delete_data(grievance_data):
    state = grievance_data["state"]
    district = grievance_data["district"]
    info = grievance_data["info"]
    aadhar = grievance_data["aadhar"]
    db.grievance.delete_one({"state": state,
                            "district": district, "blog": info, "aadhar": aadhar})
    return {"message": "successfully deleted grievance", "status": 200}


@app.route('/api/delete_grievance', methods=['POST'])
def delete_grievance():
    grievance_data = request.get_json(force=True)
    if grievance_data:
        data = grievance_delete_data(grievance_data)
        return data
    return {"message": "Please try again after some time.", "status": 400}
######################################### Grievance post #################################################


def put_grievance_data(grievance_data):
    username = grievance_data["username"]
    state = grievance_data["state"]
    district = grievance_data["district"]
    info = grievance_data["blog"]
    aadhar = grievance_data["aadhar"]
    db.grievance.insert_one({"username": username, "state": state,
                            "district": district, "blog": info, "aadhar": aadhar})
    return {"message": "successfully added grievance", "status": 200}


@app.route('/api/post_grievance', methods=['POST'])
def post_grievance():
    grievance_data = request.get_json(force=True)
    print(grievance_data)
    if grievance_data:
        data = put_grievance_data(grievance_data)
        return data
    return {"message": "Please try again after some time.", "status": 400}


########################################## view  grievance    ##########################################
def get_grievance_data(grievance_data):
    state = grievance_data["state"]
    district = grievance_data["district"]
    print(grievance_data)
    temp = list(db.grievance.find(
        {"state": state, "district": district}, {"_id": 0}))
    data = {0: len(temp)}
    for i in range(len(temp)):
        data[i+1] = temp[i]
    return data


@app.route('/api/view_grievance', methods=['POST'])
def view_grievance():
    grievance_data = request.get_json(force=True)
    if grievance_data:
        data = get_grievance_data(grievance_data)
        return data
    return {"message": "Please try again after some time.", "status": 400}

######################################### feedback delete #########################################

def feedback_delete_data(feedback_data):
    state = feedback_data["state"]
    district = feedback_data["district"]
    feedback = feedback_data["feedback"]
    db.feedback.delete_one({"state": state,
                            "district": district, "feedback": feedback})
    return {"message": "successfully deleted feedback", "status": 200}


@app.route('/api/delete_feedback', methods=['POST'])
def delete_feedback():
    feedback_data = request.get_json(force=True)
    if feedback_data:
        data = feedback_delete_data(feedback_data)
        return data
    return {"message": "Please try again after some time.", "status": 400}

########################################feedback post #################################################

def put_feedback_data(feedback_data):
    username = feedback_data["username"]
    state = feedback_data["state"]
    district = feedback_data["district"]
    feedback = feedback_data["feedback"]
    db.feedback.insert_one({"username": username, "state": state,
                            "district": district, "feedback": feedback})
    return {"message": "successfully added feedback", "status": 200}


@app.route('/api/post_feedback', methods=['POST'])
def post_feedback():
    feedback_data = request.get_json(force=True)
    print(feedback_data)
    if feedback_data:
        data = put_feedback_data(feedback_data)
        return data
    return {"message": "Please try again after some time.", "status": 400}

########################################## view feedback   ##########################################

def get_feedback_data(feedback_data):
    username = feedback_data["username"]

    temp = list(db.feedback.find(
        {}, {"_id": 0}))
    data = {0: len(temp)}
    for i in range(len(temp)):
        data[i+1] = temp[i]
    return data


@app.route('/api/view_feedback', methods=['POST'])
def view_feedback():
    feedback_data = request.get_json(force=True)
    if feedback_data:
        data = get_feedback_data(feedback_data)
        return data
    return {"message": "Please try again after some time.", "status": 400}

#########################################  get crop names #############################################


@app.route('/api/get_crop_names', methods=['GET'])
def get_crop_names():
    temp = list(db.crop.find({}, {"_id": 0}))
    l = []
    data = {}
    for i in range(len(temp)):
        if(temp[i]['cropname'] not in l):
            data[i+1] = temp[i]
            l.append(temp[i]['cropname'])
    data[-1] = len(l)
    return data

#########################################  post crop_rates  ############################################


def put_crop_rates(crop_rates_data):
    cropname = crop_rates_data["cropname"]
    price = crop_rates_data["price"]
    date = crop_rates_data["date"]
    db.crop.insert_one({"cropname": cropname, "price": price, "date": date})
    return {"message": "successfully added price", "status": 200}


@app.route('/api/post_crop_rates', methods=['POST'])
def post_crop_rates():
    crop_rates_data = request.get_json(force=True)
    print(crop_rates_data)
    if crop_rates_data:
        data = put_crop_rates(crop_rates_data)
        return data
    return {"message": "Please try again after some time.", "status": 400}


#########################################  crop graphs   ##############################################

def generate_crop_graph(crop_rates_data):
    cropname = crop_rates_data["cropname"]

    temp = list(db.crop.find({"cropname": cropname}, {"_id": 0}))
    data = []
    for i in range(len(temp)):
        dates = []
        dates.append(temp[i]["date"])
        dates.append(int(temp[i]["price"]))
        data.append(dates)
    data.sort()
    prices=[]
    dates=[]
    for i in data:
        prices.append(i[1])
        dates.append(i[0])


    plt.bar(dates, prices)

    save_path = "C:/Users/bq234t/OneDrive/Documents/Projects/lexicon/public"

    completeName = os.path.join(save_path, "crop_graph.jpg")
    plt.savefig(completeName)
    try:
        plt.clf()
    except:
        print('error')
    plt.plot(dates, prices)

    save_path = "C:/Users/bq234t/OneDrive/Documents/Projects/lexicon/public"

    completeName = os.path.join(save_path, "crop_graph1.jpg")
    plt.savefig(completeName)
    try:
        plt.clf()
    except:
        print('error')
    
    return {"status": 200}


@app.route('/api/show_crop_graph', methods=['POST'])
def show_crop_graph():
    crop_rates_data = request.get_json(force=True)
    if crop_rates_data:
        data = generate_crop_graph(crop_rates_data)
        return data
    return {"message": "Please try again after some time.", "status": 400}


#########################################  states and districts dropdown ##############################


@app.route('/api/states', methods=['GET'])
def send_states():
    data = list(db.state_list.find({}, {"_id": 0, "states": 1}))[0]
    return data


@app.route('/api/districts', methods=['POST'])
def send_districts():
    data = request.get_json(force=True)
    state = data["state"]
    district = list(db.district_list.find({}, {"_id": 0, state: 1}))[0][state]
    # print(district)
    return {"district": district}

######################################### change password ###############################


def change_password_fun(get_data):
    username = get_data["username"]
    new_password = get_data["new_password"]
    db.login_details.update_one({"username": username}, {
                                "$set": {"password": new_password}})
    return {"message": "success", "status": 200}


@app.route('/api/change_password', methods=['POST'])
def change_password():
    get_data = request.get_json(force=True)
    if get_data:
        data = change_password_fun(get_data)
        return data
    return {"message": "Please try again after some time.", "status": 400}


############################################## sending_Dashboard_links  logic ###########################################

def post_dashboard_details(details):
    subject = details["subject"]
    link = details["link"]
    # print(username, password, category)
    db.dashboard_links.insert_one({"subject": subject,
                                   "link": link})
    return {"message": "success", "status": 200}


@app.route('/api/add_dashboard', methods=['POST'])
def add_dashboard():
    details = request.get_json(force=True)
    # print(person_info)
    if details:
        return post_dashboard_details(details)
    return {"message": "Unable to add link to Dashboard", "status": 400}


############################################## displaying_Dashboard_links  logic ###########################################

@app.route('/api/getNotice', methods=['GET'])
def show_dashboard():
    temp = list(db.dashboard_links.find({}, {"_id": 0}))
    # mytext = "Welcome to the Kisan webportal."
    # # print(mytext)
    # myobj = gTTS(text=mytext, lang="en", slow=True)

    # # save_path = "/public"
    # # completeName = os.path.join(save_path, "text_speech.mp3")
    # myobj.save(
    #     "C:/Users/bq234t/OneDrive/Documents/Projects/lexicon/public/text_speech.mp3")
    data = {0: len(temp)}
    for i in range(len(temp)):
        data[i+1] = temp[i]
    return data

############################################## get_states  logic ###########################################


@app.route('/api/get_markers', methods=['GET'])
def get_markers():
    temp = list(db.state_locations.find({}, {"_id": 0}))[0]
    print(temp)
    return temp
