This is the template for a project ready to be enriched by bower and will be easily updated using a mixture of bower and grunt.

Preparation steps:
You can download this project, or alternatively run this in the folder for the project you want to initiate:
npm init
bower init

and just download and use the Gruntfile.js from this project.

Enrich the project:

1- Use bower to install packages you want. Don't forget to "save" the dependencies. E.g.:

bower install jquery --save
bower install backbone --save

2- Install Grunt and its bowerInstall plugin using the following commands (using save-dev is optional):
npm install grunt --save-dev
npm install grunt-bower-install --save-dev

3- Run bower install. Please note that it only updates your html files if it finds the <!-- bower:js --> and <!-- endbower --> comments.

grunt bowerInstall

Final Result:
After running these commands, you should see the following changes:

bower.json:
+  "dependencies": {
+    "jquery": "~2.1.1",
+    "backbone": "~1.1.2"
+  }

index.html:
        <!-- bower:js -->
+       <script src="bower_components/jquery/dist/jquery.js"></script>
+       <script src="bower_components/underscore/underscore.js"></script>
+       <script src="bower_components/backbone/backbone.js"></script>
        <!-- endbower -->

package.json (if you have used --save-dev):
+  "devDependencies": {
+    "grunt": "~0.4.5",
+    "grunt-bower-install": "~1.6.0"
+  }
