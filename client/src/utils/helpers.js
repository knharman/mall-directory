export function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function idbPromise(mallName) {
    return new Promise((resolve, reject) => {
      const request = window.indexedDB.open('mall-directory', 1);
      let db, tx;
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

  
        db.onerror = function(e) {
          console.log('error', e);
        };
  
        tx.oncomplete = function() {
          db.close();
        };
      };
    });
  }
  