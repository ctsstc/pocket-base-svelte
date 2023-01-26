migrate((db) => {
  const collection = new Collection({
    "id": "y6t3aam5w11qogs",
    "created": "2023-01-25 10:17:58.615Z",
    "updated": "2023-01-25 10:17:58.615Z",
    "name": "item",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "a3cabrs0",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "mlgf9rce",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "zvqyphzy",
        "name": "complete",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("y6t3aam5w11qogs");

  return dao.deleteCollection(collection);
})
