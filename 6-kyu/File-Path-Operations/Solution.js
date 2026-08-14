class FileMaster {
    constructor(filepath) {
        this.filepath = filepath;
    }

    extension() {
        const arr = this.filepath.split("/");
        const [name, ext] = arr[arr.length - 1].split(".");
        return ext;
    }

    filename() {
        const arr = this.filepath.split("/");
        const [name, ext] = arr[arr.length - 1].split(".");
        return name;
    }

    dirpath() {
        const arr = this.filepath.split("/");
        return arr.slice(0, -1).join("/") + "/";
    }
}
