package controllers;

import play.mvc.Result;

public class HomeController extends AbstractController {

    public Result homePage() {
        return ok(views.html.home.HomePage.apply());
    }

    public Result testCase() {
        return ok(views.html.home.testcare.apply());
    }
}