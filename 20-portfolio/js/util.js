var utils = {
    getHashVar: function(key) {
        var vars = {};
        window.location.hash.replace(/[#&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
            vars[key] = value;
        });
        return vars[key];
    },
    setHashVars: function(data) {
        var vars = {};
        window.location.hash.replace(/[#&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
            vars[key] = value;
        });

        $.each(data, function(key, row) {
            if (row.value == null) {
                delete vars[row.key]
            } else {
                vars[row.key] = row.value;
            }
        })
        window.location.hash = '#' + $.param(vars);
    },
    setHashVar: function(key, data) {
        var vars = {};
        window.location.hash.replace(/[#&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
            vars[key] = value;
        });
        if (data == null) {
            delete vars[key]
        } else {
            vars[key] = data;
        }
        window.location.hash = '#' + $.param(vars)
    },
    removeHash: function() {
        history.pushState("", document.title, window.location.pathname
            + window.location.search);
    }
}
