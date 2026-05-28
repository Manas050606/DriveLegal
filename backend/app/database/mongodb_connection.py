from bson.objectid import ObjectId

from app.database.database import db


class MongoDBHelper:
    """
    Reusable MongoDB CRUD Helper
    """

    def __init__(self):

        self.database = db

    # =========================================
    # CREATE
    # =========================================

    def insert_one(self, collection_name, data):

        collection = self.database[
            collection_name
        ]

        result = collection.insert_one(data)

        return str(result.inserted_id)

    # =========================================
    # READ
    # =========================================

    def find_one(self, collection_name, query):

        collection = self.database[
            collection_name
        ]

        document = collection.find_one(query)

        if document:

            document["_id"] = str(
                document["_id"]
            )

        return document

    def find_many(
        self,
        collection_name,
        query={}
    ):

        collection = self.database[
            collection_name
        ]

        documents = collection.find(query)

        results = []

        for document in documents:

            document["_id"] = str(
                document["_id"]
            )

            results.append(document)

        return results

    # =========================================
    # UPDATE
    # =========================================

    def update_one(
        self,
        collection_name,
        query,
        update_data
    ):

        collection = self.database[
            collection_name
        ]

        result = collection.update_one(
            query,
            {"$set": update_data}
        )

        return result.modified_count

    # =========================================
    # DELETE
    # =========================================

    def delete_one(
        self,
        collection_name,
        query
    ):

        collection = self.database[
            collection_name
        ]

        result = collection.delete_one(query)

        return result.deleted_count

    # =========================================
    # COUNT
    # =========================================

    def count_documents(
        self,
        collection_name,
        query={}
    ):

        collection = self.database[
            collection_name
        ]

        return collection.count_documents(query)

    # =========================================
    # FIND BY ID
    # =========================================

    def find_by_id(
        self,
        collection_name,
        document_id
    ):

        collection = self.database[
            collection_name
        ]

        document = collection.find_one({
            "_id": ObjectId(document_id)
        })

        if document:

            document["_id"] = str(
                document["_id"]
            )

        return document


# =========================================
# GLOBAL HELPER INSTANCE
# =========================================

mongodb_helper = MongoDBHelper()