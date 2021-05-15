<%@ taglib uri="WEB-INF/mytags.tld" prefix="fiec" %>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<fiec:armazenamento />


<!doctype html>
<html lang="pt-br">

<head>

  <meta charset="utf-8">	
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <title>Treinamento Indaiatuba Abril 2021</title>

  <!-- CSS -->
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/utilizando-bootstrap.css">
</head>

<body>
	<c:set var="media" value="${7}"/>
	<c:set var="quantidadeAluno" value="${fn:length(alunos)}"/>
	
  <nav>
    <a href="#conteudo">Conteúdo</a>
    <a href="#cadastrar">Cadastrar</a>
    <c:if test="${quantidadeAluno > 0}">
    	<a href="#lista">Lista de alunos</a>
    </c:if>
  </nav>

  <header>
    <h1>Treinamento Indaiatuba Abril 2021</h1>
  </header>

  <section id="banner">
    <img class="img-fluid" src="https://i.picsum.photos/id/210/1600/350.jpg?hmac=u5C8ihcdKxZE0rfrOYEZtcZAtuGdQGFflz4x4n9dFDA" alt="">
  </section>

  <section id="conteudo">
    <div class="my-container">
      <h2>HTML básico</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</li>
      </ul>
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  </section>

  <section id="cadastrar">
    <div class="my-container">
      <h2>Cadastro de Aluno</h2>
      <form class="row g-3 needs-validation" novalidate action="index.jsp">
        <ul>
          <div class="container">
            <div class="row">
              <div class="col">
                <li>
                  <label class="form-label">Nome completo*</label>
                  <input class="form-control" aria-label="First name" placeholder="Username" type="text" id="nome" name="nome" onclick="style.outline = null" required>
                  <div class="invalid-feedback">
                    Please choose a username.
                  </div>
                </li>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <li>
                  <label class="form-label" >CPF*</label>
                  <input class="form-control" type="text" id="cpf" name="cpf"  onclick="style.outline = null" required>
                  <div class="invalid-feedback">
                    Please provide a valid CPF.
                  </div>
                </li> 
              </div>
              <div class="col">
                <li>
                  <label class="form-label">Nascimento*</label>
                  <input class="form-control" aria-label="Last name" type="text" id="data" name="nasc"  onclick="style.outline = null" required placeholder="dd/mm/aaaa">
                  <div class="invalid-feedback">
                    Please choose a data.
                  </div>
                </li>
              </div>
              <div class="col">
                <li>
                  <label class="form-label">Sexo*</label>
                  <select id="sexo" name="sexo" class="form-select"  onclick="style.outline = null" required>
                    <option value="">Selecione</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid sex.
                  </div>
                </li>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <li>
                  <label class="form-label">Email*</label>
                  <input class="form-control" type="email" id="email" name="mail"  onclick="style.outline = null" required>
                  <div class="invalid-feedback">
                    Please provide a valid email.
                  </div>
                </li>
              </div>
              <div class="col">
                <li>
                  <label class="form-label">Celular*</label>
                  <input class="form-control" type="text" id="celular" name="cel"  onclick="style.outline = null" required>
                  <div class="invalid-feedback">
                    Please provide a valid telephone.
                  </div>
                </li>
              </div>
            </div>
          <hr> 
            <div class="row">
              <div class="col">
                <li>
                  <label class="form-label">Nível*</label>
                  <select id="nivel" name="nivel" class="form-select" onclick="style.outline = null" required>
                    <option value="">Selecione</option>
                    <option value="novato">Novato</option>
                    <option value="formado">Formado</option>
                    <option value="veterano">Veterano</option>
                  </select>
                  <div class="invalid-feedback">
                    Please select a valid nivel.
                  </div>
                </li> 
              </div>
              <div class="col">
                <li>
                  <label class="form-label">Média*</label>
                  <input class="form-control" type="text" id="media" name="media"  onclick="style.outline = null" required>
                  <div class="invalid-feedback">
                    Please choose a media.
                  </div>
                </li>
              </div>
            </div>
          
            </ul>
            <hr>
            <p>
              * Campo obrigatório
            </p>
            <hr>
            <div class="col-12">
            <button class="btn btn-outline-secondary" type="submit" onclick="return validar()">Cadastrar</button>
            </div>
          </div>
      </form>
    </div>
  </section>
	<c:if test="${quantidadeAluno > 0}">
		<section id="lista">
    <div class="my-container">
      <h2>Lista de alunos</h2>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Nome completo</th>
            <th>CPF</th>
            <th>Nascimento</th>
            <th>Sexo</th>
            <th>Email</th>
            <th>Celular</th>
            <th>Nivel</th>
            <th>Média</th>
          </tr>
        </thead>
        <tbody>
        
         <c:forEach items=”${alunos}” var=”aluno”>
			<tr>
            <td><c:out value="${aluno.nome}"/></td>
            <td><c:out value="${aluno.cpf}"/></td>
            <td><fmt:formatDate value="${aluno.dataDeNascimento}" pattern="dd-MM-yyyy" /></td>
            <td><c:out value="${aluno.sexo}"/></td>
            <td><c:out value="${aluno.email}"/></td>
            <td><c:out value="${aluno.celular}"/></td>
            <td><c:out value="${aluno.nivel}"/></td>
            <c:choose>
            	<c:when test="${aluno.media >= media}">
            		<td class="bg-sucess text-white"><c:out value="${aluno.media}"/></td>
            	</c:when>
            </c:choose>
            <c:otherwise>
            	<td class="bg-danger text-white"><c:out value="${aluno.media}"/></td>
            </c:otherwise>
           
            
          </tr>
		</c:forEach>
         
          
        </tbody>
      </table>
    </div>
  </section>
	</c:if>
	<c:forEach items=”${alunos}” var=”aluno”>
	<c:if test="${quantidadeAluno > 0}">
		<c:if test="${aluno.media > 7}">0
			<section id="lista">
	    <div class="my-container">
	      <h2>Lista de alunos</h2>
	      <table class="table table-hover">
	        <thead>
	          <tr>
	            <th>Nome completo</th>
	            <th>CPF</th>
	            <th>Nascimento</th>
	            <th>Sexo</th>
	            <th>Email</th>
	            <th>Celular</th>
	            <th>Nivel</th>
	            <th>Média</th>
	          </tr>
	        </thead>
	        <tbody>
	                 
				<tr>
	            <td><c:out value="${aluno.nome}"/></td>
	            <td><c:out value="${aluno.cpf}"/></td>
	            <td><fmt:formatDate value="${aluno.dataDeNascimento}" pattern="dd-MM-yyyy" /></td>
	            <td><c:out value="${aluno.sexo}"/></td>
	            <td><c:out value="${aluno.email}"/></td>
	            <td><c:out value="${aluno.celular}"/></td>
	            <td><c:out value="${aluno.nivel}"/></td>
	            <td class="bg-sucess text-white"><c:out value="${aluno.media}"/></td>
	            
	           
	            
	          </tr>
			
			</c:if>
		</c:if>
	</c:forEach>
	<c:forEach items=”${alunos}” var=”aluno”>
	<c:if test="${quantidadeAluno > 0}">
		<c:if test="${aluno.media < 7}">
			<section id="lista">
	    <div class="my-container">
	      <h2>Lista de alunos</h2>
	      <table class="table table-hover">
	        <thead>
	          <tr>
	            <th>Nome completo</th>
	            <th>CPF</th>
	            <th>Nascimento</th>
	            <th>Sexo</th>
	            <th>Email</th>
	            <th>Celular</th>
	            <th>Nivel</th>
	            <th>Média</th>
	          </tr>
	        </thead>
	        <tbody>
	                 
				<tr>
	            <td><c:out value="${aluno.nome}"/></td>
	            <td><c:out value="${aluno.cpf}"/></td>
	            <td><fmt:formatDate value="${aluno.dataDeNascimento}" pattern="dd-MM-yyyy" /></td>
	            <td><c:out value="${aluno.sexo}"/></td>
	            <td><c:out value="${aluno.email}"/></td>
	            <td><c:out value="${aluno.celular}"/></td>
	            <td><c:out value="${aluno.nivel}"/></td>
	            <td class="bg-danger text-white"><c:out value="${aluno.media}"/></td>
	            
	           
	            
	          </tr>
			
			</c:if>
		</c:if>
		</tbody>
	</c:forEach>
	
  
  

  <footer>
    Copyright 2021 | VILT GROUP
  </footer>

  <!-- js -->
  <script src="js/main.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/utilizando-bootstrap.js"></script>

</body>

</html>