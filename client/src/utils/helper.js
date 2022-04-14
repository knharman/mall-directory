export function idbPromise(mallName) {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open('mall-directory', 1);
    let db, tx, mall;
    request.onupgradeneeded = function(e) {
      const db = request.result;
      db.createObjectStore('stores', { keyPath: '_id' });
      db.createObjectStore('categories', { keyPath: '_id' });
    };

    request.onerror = function(e) {
      console.log('There was an error');
    };

    request.onsuccess = function(e) {
      db = request.result;
      tx = db.transaction(mallName, 'readwrite');
      mall = tx.objectStore(mallName);

      db.onerror = function(e) {
        console.log('error', e);
      };

      tx.oncomplete = function() {
        db.close();
      };
    };
  });
}
