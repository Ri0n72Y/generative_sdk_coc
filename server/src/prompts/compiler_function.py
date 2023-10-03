from src.prompts.compiler_constants import def_compiler, def_init, def_function, class_ai, class_import, class_user

def nlp_full(code: str, function = False, useClasses = False) -> str:
    defination = def_compiler
    if (function):
        defination += def_function
    prefix = class_import
    if (useClasses):
        prefix += class_ai
        prefix += class_user
    return """
{defination}
<MIXCODE>
```
{prefix}
{code}
```
</MIXCODE>
{init}
""".format(defination = defination, prefix = prefix, code = code, init=def_init)
