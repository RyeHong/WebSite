from django.shortcuts import render

def render_page(request, page):
    return render(request, "index.html")
