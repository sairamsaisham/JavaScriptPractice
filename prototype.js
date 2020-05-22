//2) Allows you to override functions if required.
        function Employee (name)
        {
            this.name = name;
        }
        
        
        Employee.prototype.getName = function ()
            {
                return this.name;
            }