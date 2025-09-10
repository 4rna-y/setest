create EXTENSION if not exists "uuid-ossp";
create EXTENSION if not exists "pg_stat_statements";

alter database setest set timezone to "UTC";