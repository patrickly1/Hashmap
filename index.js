class Node {
    constructor(key, value, next = null) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class HashMap {
    constructor(size = 16) {
        this.buckets = Array(size).fill(null);
        this.size = size;
        this.length = 0;
    }
    
    //Takes a key and produces a hashcode
    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode % this.size;
    }

    //Assigns a value to a key, overrides if a key already present
    set(key, value) {
        let index = this.hash(key);

        if (index < 0 || index >= this.size) {
            throw new Error("Trying to access index out of bound");
        }

        let node = this.buckets[index];
        this.length++;

        if (!node) {
            this.buckets[index] = new Node(key, value);
            return;
        }

        let prev = null;

        while (node) {
            if (node.key === key) {
                node.value = value;
                return;
            }

            prev = node;
            node = node.next;
        }

        prev.next = new Node(key, value);
    }

    //Returns the value if key is in HashMap
    get(key) {
        let index = this.hash(key);

        if (index < 0 || index >= this.size) {
            throw new Error("Trying to access index out of bound");
        }

        let node = this.buckets[index];

        while (node) {
            if (node.key === key) {
                return node.value;
            }

            node = node.next;
        }

        return null;
    }

    //Checks if given key is in HashMap
    has(key) {
        let index = this.hash(key); 

        if (index < 0 || index >= this.size) {
            throw new Error("Trying to access index out of bound");
        }

        let node = this.buckets[index];

        while (node) {
            if (node.key === key) {
                return true;
            }

            node = node.next;
        }

        return false;
    }

    //Remove key is in HashMap
    remove(key) {
        let index = this.hash(key);

        if (index < 0 || index >= this.size) {
            throw new Error("Trying to access index out of bound");
        }

        let node = this.buckets[index];
        let prev = null;

        while (node) {
            if (node.key === key) {
                if (!prev) {
                    this.buckets[index] = node.next;
                } else {
                    prev.next = node.next;
                } 
                this.length--;
                return true;
            }

            prev = node;
            node = node.next
        }

        return false;
    }

    //Return number of stored keys in HashMap
    getLength() {
        return this.length;
    }

    //Removes all entries in HashMap
    clear() {
        this.buckets = Array(this.size).fill(null);
        this.length = 0;
    }

    //Return an array containing alll keys inside Hashmap
    keys() {
        let keys = [];

        for (let index = 0; index < this.size; index++) {
            if (index < 0 || index >= this.size) {
                throw new Error("Trying to access index out of bound");
            }

            let node = this.buckets[index];
            while (node) {
                keys.push(node.key);
                node = node.push;
            }
        }
        return keys;
    }

    //Return an array containing all the vaues
    values() {
        let values = [];

        for (let index = 0; index < this.size; index++) {
            if (index < 0 || index >= this.size) {
                throw new Error("Trying to access index out of bound");
            }

            let node = this.buckets[index];
            while (node) {
                values.push(node.value);
                node = node.push;
            }
        }
        return values;
    }

    //Return an array containing all key, value pairs
    entries() {
        let entries = [];

        for (let index = 0; index < this.size; index++) {
            if (index < 0 || index >= this.size) {
                throw new Error("Trying to access index out of bound");
            }

            let node = this.buckets[index];
            while (node) {
                entries.push([node.key, node.value]);
                node = node.push;
            }
        }
        return entries;
    }
}

const hashMap = new HashMap();
console.log("set example", hashMap.set("example", "value"));
console.log("set example2", hashMap.set("example2", "value2"));
console.log("get example", hashMap.get("example"));
console.log("has example", hashMap.has("example"));
console.log("has nothing", hashMap.has("nothing"));
console.log("has example2", hashMap.has("example2"));
console.log("remove example", hashMap.remove("example"));
console.log("remove example", hashMap.remove("nothing"));
console.log("remove example", hashMap.remove("example"));
console.log("has example", hashMap.has("example"));
console.log("has example2", hashMap.has("example2"));
console.log("length", hashMap.getLength());
console.log("clear", hashMap.clear());
console.log("has example2", hashMap.has("example2"));
console.log("length", hashMap.getLength());
console.log("set example3", hashMap.set("example3", "value3"));
console.log("set example4", hashMap.set("example4", "value4"));
console.log("keys", hashMap.keys());
console.log("values", hashMap.values());
console.log("entries", hashMap.entries());
console.log("clear", hashMap.clear());
console.log("entries", hashMap.entries());