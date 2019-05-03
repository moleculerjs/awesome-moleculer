
## :memo: Guide to add a new module

### Step 1

Make sure you are **master** branch

### Step 2

- Open `modules.yml` file.
- Find the appropriate topic and sub-topic for you module.
For example, assuming that you want to share an awesome gateway, you need to go:
```yaml
services:
  title: Services

  gateway:
    title: Gateway
    entries:
      # Add you module here
```

- Create new entry using this format
```yaml
- name: my-awesome-module-name
  link: https://www.link-to-my-repo.com
  desc: String that supports Markdown syntax.
  author: Your Name
```
## Note: 
If your `desc` starts with a special char please add an escape char (`\` or `/`)

Example of an **INVALID** `desc`:  
```yaml
desc: [MoleculerJS](https://moleculer.services/)
```

Example of a **VALID** `desc`:
```yaml
desc: \[MoleculerJS](https://moleculer.services/)
desc: /[MoleculerJS](https://moleculer.services/)
```
