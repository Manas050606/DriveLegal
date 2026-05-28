from pymongo import MongoClient
from pymongo.errors import ConnectionFailure

from app.config.settings import Settings


class DatabaseManager:
    """
    MongoDB Database Manager
    """

    def __init__(self):

        self.client = None

        self.db = None

    def connect(self):
        """
        Establish MongoDB connection.
        """

        try:

            self.client = MongoClient(
                Settings.MONGO_URI
            )

            # Verify connection
            self.client.admin.command('ping')

            self.db = self.client[
                Settings.DATABASE_NAME
            ]

            print(
                f"[SUCCESS] Connected to MongoDB: "
                f"{Settings.DATABASE_NAME}"
            )

            return self.db

        except ConnectionFailure as error:

            print(
                f"[ERROR] MongoDB Connection Failed: "
                f"{error}"
            )

            return None

    def get_database(self):
        """
        Return database instance.
        """

        if self.db is None:

            self.connect()

        return self.db

    def close_connection(self):
        """
        Close MongoDB connection.
        """

        if self.client:

            self.client.close()

            print(
                "[INFO] MongoDB connection closed."
            )


# =========================================
# GLOBAL DATABASE INSTANCE
# =========================================

database_manager = DatabaseManager()

db = database_manager.connect()