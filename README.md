# Pokretanje localhost

### 1. npm install 
### 2. pokretanje dev gridsome develop bice na `http://localhost:8080`

# Struktura gridsome

### 1. u src folderu layout je podesen osnovni layout za footer i header

### 2. u src folderu staticne stranice su pages koje su izradjene iz vise komponenti koje se pozivaju untar
Stranice savetovaliste novi sad/beograd imaju svoj layout koji se untar njih poziva radi ralicite nav i futera

### 3. u src folderu folder template u njemu se nalaze fajlovi koji dinamicki prikazuju sadrzaj 
To su kategorije i blog post

### 4. u public folderu su slike koje ne obuhvata gridsome sa svojim img pozivom vec se automatski ucitavaju tu idu slike za blog postove 

### 5. u src folderu assets su slike koje imaju lazyload 


# Content folder
Untar ovog foldera su folderi za kreiranje blog postova. Oni se pisu u markdownu.
Blog se sastoji iz objekta u kojem se pozivaju vec definisani objekti Author i Category.
Untar bloga oni se pozivaju po jedinstvenom ID-ju

# Build i deploy

Prilikom zavrsetka promjena pokrece se ***gridsome build***, "bag" koji se moze desiti jeste da slike nece da obradi tada treba izbrisati 
folder dist i ponovo pokrenuti build komandu. Kada se build zavrsi potrebno je odrati git push i onda odobriti na netifly pustanje na
produkuciju

# Napomena za Tailwind headless UI koristi se alpine.js koji je ubacen u index.html
