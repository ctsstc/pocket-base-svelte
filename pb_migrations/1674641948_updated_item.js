migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y6t3aam5w11qogs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cr7mfzue",
    "name": "user_id",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y6t3aam5w11qogs")

  // remove
  collection.schema.removeField("cr7mfzue")

  return dao.saveCollection(collection)
})
