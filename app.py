from flask import Flask, render_template, session, request

app = Flask(__name__)
app.secret_key = "very_epic_secret_key300"  # super secret key


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/page1")
def page1():
    if not session.get("visitCount"):
        session["visitCount"] = 1
    else:
        session["visitCount"] += 1

    return render_template("page1.html")


@app.route("/page2", methods=["POST", "GET"])
def page2():
    if request.method == "POST":
        session["sillyName"] = request.form["name"]

    return render_template("page2.html")


@app.route("/page3")
def page3():

    return render_template("page3.html")

@app.route("/page4")
def page4():

    return render_template("page4.html")


app.run(debug=True)
