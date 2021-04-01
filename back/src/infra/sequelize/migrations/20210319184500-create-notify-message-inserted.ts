import { QueryInterface } from 'sequelize';

export async function up(query: QueryInterface) {
  try {
    query.sequelize.query(
      `
        CREATE OR REPLACE FUNCTION public.notify_message_inserted()
        RETURNS trigger AS $function$
          BEGIN
            PERFORM pg_notify('message_inserted', row_to_json(NEW)::text);  
            RETURN NULL;
          END;
        $function$ LANGUAGE plpgsql
      `
    );
  } catch (e) {
    return Promise.reject(e);
  }
}

export async function down(query: QueryInterface) {
  try {
    await query.sequelize.query(
      `
        DROP FUNCTION public.notify_message_inserted CASCADE;
      `
    );
  } catch (e) {
    return Promise.reject(e);
  }
}
