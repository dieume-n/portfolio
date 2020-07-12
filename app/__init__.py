from flask import Flask


def create_app(**override_config):
    app = Flask(__name__)

    # Application configuration
    app.config.from_pyfile('settings.py')

    # import Blueprints
    from app.pages.views import pages

    # Register Blueprints
    app.register_blueprint(pages)

    return app
