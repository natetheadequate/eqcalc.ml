# EqCalc.ml

Transferred from gcalc.ml after I lost that domain name.

I aim to create a calculator that allows for a more error-free way of modeling word problems. The user will be free to choose from a dropdown the interpretation of the tokens they write -- For example, a user could choose whether they want "I" to be intepreted as moment of inertia, current, or a user-defined variable. Subscripts can be used to designate that the variable belongs to a collection, such as the properties of an object of the state at a particular point in time. In kinematics, you often end up with things like V<sub>Car<sub>0</sub></sub>.  These carry semantic value,but aren't used by any calculator I know of.  In addition, no calculator contans a prebuilt knowledge of equations that it can use to solve for variables, instead relying on the user to type them in. I will include equations to relate various special variables to reduce manual labor. 
