Title: I don't use PipEnv
Date: 2019-03-01 06:01
Category: I don't use...

- I get an error when

```python
pipenv install black
```

- It's slow compared to a cycle of
    1. Pip install \<package>
    2. Pip show \<package>
    3. Updating the requirements.txt file with '\<package>==\<version>'
